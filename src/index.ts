import * as paper from 'paper';

paper.setup('canvas');

new paper.Path.Circle({
    center   : paper.view.center,
    radius   : 50,
    fillColor: 'orange',
});
