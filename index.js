const inventory = newInventory();
move(inventory).to(0, 0);

const character = newImage('assets/green-character/static.gif');
move(character).to(100, 250);

let direction = null;
let x = 100;
let y = 250;

function moveCharacter() {
    if (direction === 'west') {
        x -= 1;
    } else if (direction === 'north') {
        y += 1;
    } else if (direction === 'east') {
        x += 1;
    } else if (direction === 'south') {
        y -= 1;
    }
    character.style.left = x + 'px';
    character.style.bottom = y + 'px';
}

function handleDirectionChange(direction) {
    if (direction === null) {
        character.src = 'assets/green-character/static.gif';
    } else {
        character.src = `assets/green-character/${direction}.gif`;
    }
}

function moveWithArrowKeys(left, bottom, callback) {
    x = left;
    y = bottom;
    setInterval(moveCharacter, 1);

    document.addEventListener('keydown', function(e) {
        if (e.repeat) return;

        if (e.key === 'ArrowLeft') {
            direction = 'west';
        } else if (e.key === 'ArrowUp') {
            direction = 'north';
        } else if (e.key === 'ArrowRight') {
            direction = 'east';
        } else if (e.key === 'ArrowDown') {
            direction = 'south';
        }
        callback(direction);
    });

    document.addEventListener('keyup', function(e) {
        direction = null;
        callback(direction);
    });
}

moveWithArrowKeys(100, 250, handleDirectionChange);

move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);
move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165, 335);
move(newItem('assets/staff.png')).to(600, 250);