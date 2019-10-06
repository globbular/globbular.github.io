var moveArr = [];
var orderDict = {
    'left': 'up',
    'up': 'right',
    'right': 'down',
    'down': 'left'
};
function getRouteFromTo(from_x, from_y, to_x, to_y, direction) {
    var intendedDirection = direction;
    var availMoves = map.getAdjacentEmptyCells(from_x,from_y);
    var moveMap = availMoves.map(function(i) {
        return i[0];
    });
    if (moveMap.includes((to_x,to_y))) {
        // map.displayChapter("Key");
        return availMoves[moveMap.indexOf((to_x,to_y))][1];
    }
    // pick best option
    var pickedMove = null;
    if(availMoves.length == 1) {
        //map.displayChapter("Len 1");
        pickedMove = availMoves[0];
    } else {
        
        for(i= 0 ; i < availMoves.length ; ++i) {
            if( availMoves[i][1] == intendedDirection ) {
                //map.displayChapter("Intended Dir");
                pickedMove = availMoves[i];
                break;
            }
        }
        if( pickedMove == null) {
            // pick next best
            for(i = 0 ; i < availMoves.length ; ++i) {
                if( availMoves[i][1] == orderDict[intendedDirection] ) {
                    // map.displayChapter("Fallback Dir");
                    pickedMove = availMoves[i];
                    intendedDirection = orderDict[intendedDirection];
                    break;
                }
            }
        }
        if(pickedMove == null) {
            // map.displayChapter("random");
            pickedMove = availMoves[map.getRandomInt(0, availMoves.length - 1)];
            intendedDirection = pickedMove[1];
        }
    }
    return pickedMove[1];
// availMoves = map.getAdjacentEmptyCells(pickedMove[0][0],pickedMove[0][1]);
    // moveMap = availMoves.map(function(i) {
    //     return i[0];
    // })
    // //got back to start, de-dupe?
    // moveArr.push(availMoves[moveMap.indexOf((to_x,to_y))]);
}
direction = getRouteFromTo(me.getX(), me.getY(),map.getWidth() - 2, 8,'right');

me.move(direction);