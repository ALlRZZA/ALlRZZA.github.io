const board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'trash',
    onDrop: handleMove
});

const game = new Chess();

function handleMove(source, target) {
    const move = game.move({
        from: source,
        to: target,
        promotion: 'q' // ارتقای پیاده به وزیر
    });

    if (!move) {
        // اگر حرکت غیرقانونی باشه (برای سیاه‌ها)
        alert('حرکت غیرمجاز!');
        return 'snapback';
    }

    if (game.turn() === 'w') {
        // قوانین رو برای سفید نادیده بگیر
        game.undo();
        board.position(game.fen());
    }
}

function invitePlayer() {
    const url = window.location.href;
    prompt('لینک رو برای دوستت بفرست:', url);
}

