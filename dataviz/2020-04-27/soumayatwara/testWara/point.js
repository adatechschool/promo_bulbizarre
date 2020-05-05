function point() {
    //constuctor
    this.pointX = Math.floor((Math.random() * canvas.width));
    this.pointY= Math.floor((Math.random() * canvas.height));
    this.drawPoint = function() {
      ctx.beginPath();
      //ctx.lineWidth = '400';
      ctx.fillStyle = '#A4A';
      ctx.arc(this.pointX, this.pointY, 10, 0,2*Math.PI);
      ctx.fill();
      ctx.closePath();
    }
}
const point = new point();