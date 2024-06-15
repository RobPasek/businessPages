document.addEventListener('DOMContentLoaded', function () {
    const tiles = document.querySelectorAll('.tile');
    
    tiles.forEach(tile => {
        tile.addEventListener('click', function () {
            tiles.forEach(t => t.classList.remove('expanded'));
            if (!this.classList.contains('expanded')) {
                this.classList.add('expanded');
            }
        });
        
        tile.addEventListener('dblclick', function () {
            this.classList.remove('expanded');
        });
    });
});