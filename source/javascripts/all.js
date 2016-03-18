var NUM_PARTICLES = 60,
    DAMPING = 1,
    GRAV = 0.01;

var particles = [],
    mouse = {
        x: 0,
        y: 0
    },
    canvas,
    ctx;

window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000 / 60);
};

var Particle = function(x, y) {
    this.x = x;
    this.y = y;

    this.px = x;
    this.py = y;

    this.fx = 0;
    this.fy = 0;

    this.radius = 4;
    this.connected = 1;
};

Particle.prototype.paint = function() {

    ctx.fillStyle = 'rgba(255,255,255,255.4)';

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    var i = this.connected;

    ctx.fillStyle = 'rgba(' + i * 5 + ',' + i * 70 + ',' + i * 7 + ',0.4)';

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 0.6, 0, Math.PI * 2);
    ctx.fill();

    this.connected = 0;
};

Particle.prototype.apply_force = function() {

    this.x += this.fx;
    this.y += this.fy;

    this.fx = this.fy = 0;
};

Particle.prototype.update = function() {

    var nx = (this.x * 2) - this.px;
    var ny = (this.y * 2) - this.py;

    this.px = this.x;
    this.py = this.y;

    this.x = nx;
    this.y = ny;
};

Particle.prototype.check_walls = function() {

    if (this.x < this.radius) {

        var vel_x = this.px - this.x;
        this.x = this.radius;
        this.px = this.x - vel_x * DAMPING;

    } else if (this.x + this.radius > canvas.width) {

        var vel_x = this.px - this.x;
        this.x = canvas.width - this.radius;
        this.px = this.x - vel_x * DAMPING;
    }

    if (this.y < this.radius) {

        var vel_y = this.py - this.y;
        this.y = this.radius;
        this.py = this.y - vel_y * DAMPING;

    } else if (this.y + this.radius > canvas.height) {

        var vel_y = this.py - this.y;
        this.y = canvas.height - this.radius;
        this.py = this.y - vel_y * DAMPING;
    }
};

window.onload = function() {

    canvas = document.getElementById('c');
    ctx = canvas.getContext('2d');

    canvas.width = document.body.clientWidth || 1200;
    canvas.height = 1080;

    while(NUM_PARTICLES--) {

        var particle =
            new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
                );

        particle.fx = -1 + Math.random() * 2;
        particle.fy = -1 + Math.random() * 2;

        particles.push(particle);
    }

    canvas.onmousemove = function(e) {

        var rect = this.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    update();
}

var update = function() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var connections = [];

    var i = particles.length;

    while (i--) {

        var particle_1 = particles[i];

        var diff_x = particle_1.x - mouse.x;
        var diff_y = particle_1.y - mouse.y;
        var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

        // Gravitational force (F=G*(M*m)/r^2)
        var force = GRAV * ((particle_1.radius * 2) * 1000) / Math.pow(dist, 2);

        force = Math.min(force, 1);

        particle_1.fx += ((diff_x / dist) * force);
        particle_1.fy += ((diff_y / dist) * force);

        particle_1.apply_force();
        particle_1.update();
        particle_1.check_walls();

        var n = i;

        while (n--) {

            var particle_2 = particles[n];

            var diff_x = (particle_2.x - particle_1.x);
            var diff_y = (particle_2.y - particle_1.y);
            var dist = Math.sqrt((diff_x * diff_x) + (diff_y * diff_y));

            if (dist < 32) {

                particle_1.connected++;
                particle_2.connected++;

                var diff = 30 - dist,
                    off_x = (diff * diff_x / dist) / 2,
                    off_y = (diff * diff_y / dist) / 2,
                    FLEX = 0.25;

                particle_1.x -= off_x * FLEX;
                particle_1.y -= off_y* FLEX;
                particle_2.x += off_x * FLEX;
                particle_2.y += off_y* FLEX;

                connections.push([particle_1,particle_2]);
            }
        }

        particle_1.paint();
    }

    var i = connections.length;

    while(i--) {

        var connection = connections[i];

        ctx.strokeStyle = 'rgba(0,0,0,0.3)';

        ctx.beginPath();
        ctx.moveTo(connection[0].x, connection[0].y);
        ctx.lineTo(connection[1].x, connection[1].y);
        ctx.stroke();
    }

    requestAnimFrame(update);
};


//packerry
// initialize Packery
$(document).ready(function () {









    $('.grid').packery({
      // options
      itemSelector: '.grid-item',
      gutter: 20,
      percentPosition: true

});



var $grid = $('#bloggrid').packery({
  itemSelector: '#loopitem'

});



$grid.infinitescroll({
  // infinite scroll options

  navSelector  : ".navi",
                 // selector for the paged navigation (it will be hidden)
  nextSelector : ".nextpage",
                 // selector for the NEXT link (to page 2)
  itemSelector : "#loopitem"
                 // selector for all items you'll retrieve





}, function( newItems ) {
  var $newItems = $(newItems);

    $grid.packery( 'appended', $newItems );
    $newItems.each( makeEachDraggable );

});

// make all grid-items draggable
$grid.find('#looitem').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});
$grid.find('#loopitem').each( makeEachDraggable );
// bind draggabilly events to item elements

function makeEachDraggable( i, gridItem ) {
  // make element draggable with Draggabilly
  var draggie = new Draggabilly( gridItem );
  // bind Draggabilly events to Packery
$grid.packery( 'bindDraggabillyEvents', draggie );
}










});
