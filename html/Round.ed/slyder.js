var cnst = 1;  // количество слайдов, перемещаемых за раз; целое, от 1-го до количества одновременно видимых
var spd  = 100; // скорость; положительное, от 1 до 100, чем больше, тем быстрее (больше 100 тоже можно, но скорость увеличиваться уже не будет)
 
onload = function ()
{
for (var dvs = document.getElementById ('ext').children, j = 0, J = dvs.length; j < J; j++)
   with (dvs [j].style) position = 'absolute', left = 645 * j + 'px';
}
 
function myFunc (dir)
{
var Ext = document.getElementById ('ext'); if (Ext.className) return; if (!Ext.className)
   {
   Ext.className = 'p' + dir; var dvs = Ext.children, J = dvs.length; if (dir > 0)
      {
      for (var j = 0; j < cnst; j++)
         {var Z = dvs [J - 1].cloneNode (1); Ext.removeChild (dvs [J - 1]), Ext.insertBefore (Z, dvs [0])}
      for (var j = 0; j < J; j++) dvs [j].style.left = 645 * (j - cnst) + 'px';
      }
   TMR = setInterval (function ()
      {
      var P = parseInt (Ext.className.substr (1)); for (var j = 0; j < J; j++)
         dvs [j].style.left = (parseInt (dvs [j].style.left) + ((!P) ? -15 : 15)) + 'px';
      if (!parseInt (dvs [P ? 0 : cnst].style.left))
         {
         clearInterval (TMR); Ext.className = ''; if (!P) for (var j = 0; j < cnst; j++)
            {var Z = dvs [0].cloneNode (1); Ext.removeChild (dvs [0]), Ext.appendChild (Z)}
         for (var j = 0; j < J; j++) dvs [j].style.left = 645 * j + 'px';
         }
      }, 1000 / spd);
   }
}