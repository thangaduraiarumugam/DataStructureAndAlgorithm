var EMPTY = 2147483647;
var GATE = 0;
var DIRECTIONS = [[1,  0], [-1,  0], [0,  1], [0, -1]];

var wallsAndGates = function(rooms) {
    var m = rooms.length;
    if (m == 0) return;
    var n = rooms[0].length;
    var q = [];
    for (var row = 0; row < m; row++) {
        for (var col = 0; col < n; col++) {
            if (rooms[row][col] == GATE) {
                q.push([row, col]);
            }
        }
    }
    while (q.length > 0) {
        var point = q.shift();
        var rw = point[0];
        var cl = point[1];
        DIRECTIONS.forEach(function(direction) {
            var r = rw + direction[0];
            var c = cl + direction[1];
            if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] != EMPTY) {
                return;
            }
            rooms[r][c] = rooms[rw][cl] + 1;
            q.push([r, c]);
        });
    }
}