import os, sys
from PIL import Image, ImageOps, ImageChops

SRC = sys.argv[1]; DST = sys.argv[2]
MAXW = 900

# name: (rgb file, smask file or None, invert_mask)
PLAIN = {
    'cover-landforms':      'im-001-000.png',
    'mountain':             'im-002-001.png',
    'mountain-range':       'im-002-002.png',
    'canyon':               'im-002-003.png',
    'cliff':                'im-003-008.png',
    'canyon-photo':         'im-004-009.png',
    'rock-types-chart':     'im-007-010.png',
    'sandstone':            'im-008-011.png',
    'limestone':            'im-008-012.png',
    'conglomerate':         'im-008-013.png',
    'rock-cycle':           'im-009-014.png',
    'mineral-luster-streak':'im-009-015.png',
    'mineral-hardness':     'im-010-016.png',
    'soil-layers':          'im-014-017.png',
    'pitted-rock':          'im-015-018.png',
    'weather-step1':        'im-015-019.png',
    'weather-step2':        'im-015-020.png',
    'weather-step3':        'im-015-021.png',
    'weather-step4':        'im-015-022.png',
    'delta':                'im-016-023.png',
    'arch':                 'im-016-024.png',
    'sea-cave':             'im-016-025.png',
    'erosion-diagram':      'im-017-026.png',
}
# images stored as black RGB + alpha smask -> rebuild line art on white
MASKED = {
    'butte':   ('im-002-004.png', 'im-002-005.png'),
    'plateau': ('im-002-006.png', 'im-002-007.png'),
}

def trim(im):
    bg = Image.new('RGB', im.size, (255, 255, 255))
    diff = ImageChops.difference(im.convert('RGB'), bg)
    bbox = ImageChops.add(diff, diff, 2.0, -40).getbbox()
    return im.crop(bbox) if bbox else im

def save(im, name):
    im = im.convert('RGB')
    im = trim(im)
    if im.width > MAXW:
        im = im.resize((MAXW, round(im.height * MAXW / im.width)), Image.LANCZOS)
    # pad slightly so art never touches the frame
    im = ImageOps.expand(im, border=max(6, im.width // 90), fill=(255, 255, 255))
    out = os.path.join(DST, name + '.png')
    im.save(out, optimize=True)
    return out, im.size, os.path.getsize(out)

report = []
for name, f in PLAIN.items():
    report.append((name,) + save(Image.open(os.path.join(SRC, f)), name)[1:])

for name, (rgbf, maskf) in MASKED.items():
    rgb = Image.open(os.path.join(SRC, rgbf)).convert('RGB')
    m = Image.open(os.path.join(SRC, maskf)).convert('L').resize(rgb.size, Image.LANCZOS)
    # smask: white = opaque ink. Draw ink (dark) over white using the mask.
    ink = ImageChops.invert(m)                      # dark lines on white
    flat = Image.merge('RGB', (ink, ink, ink))
    report.append((name,) + save(flat, name)[1:])

total = 0
for name, size, nbytes in sorted(report):
    total += nbytes
    print(f'{name:26s} {str(size):14s} {nbytes/1024:7.1f} KB')
print(f'{"TOTAL":26s} {"":14s} {total/1024:7.1f} KB  ({len(report)} files)')
