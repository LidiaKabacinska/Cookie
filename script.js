function mix() {
    x = 200;
    y = 200;
    elem = document.getElementsByClassName('choc');
    for (let e of elem) {
      let randomX = Math.floor(Math.random()*x);
        let randomY = Math.floor(Math.random()*y);
      e.style.top = randomX + 'px';
      e.style.left = randomY + 'px';
    }
};