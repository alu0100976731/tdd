var assert = require('assert');

function Raices(a, b, c)
{
   
   var Discriminante = b*b-4*a*c;
   var RaizDiscriminante;
   var RaizReal1, RaizReal2, RaizImaginaria1, RaizImaginaria2;
   var DobleA = 2*a;
   
   if (Discriminante > 0)
   {
      RaizDiscriminante = Math.sqrt(Discriminante);
      RaizReal1 = (-b+RaizDiscriminante)/DobleA;
      RaizReal2 = (-b-RaizDiscriminante)/DobleA;
      RaizImaginaria1 = 0;
      RaizImaginaria2 = 0;
   }
   else
   {
      RaizDiscriminante = Math.sqrt(-Discriminante);
      RaizReal1 = -b / DobleA;
      RaizReal2 = -b / DobleA;
      RaizImaginaria1 = RaizDiscriminante/DobleA;
      RaizImaginaria2 = -RaizDiscriminante/DobleA;
   }
   
   
   return [[RaizReal1, RaizImaginaria1], [RaizReal2, RaizImaginaria2]];
}
assert.deepEqual(Raices(1, -5, 0), [[5, 0], [0, 0]]);
assert.deepEqual(Raices(2, 5, 0), [[0, 0], [-2.5, 0]]);
assert.deepEqual(Raices(1, 5, 0), [[0, 0], [-5, 0]]);
assert.deepEqual(Raices(1, 0, 1), [[0, 1], [0, -1]]);
assert.deepEqual(Raices(1, -2, 5), [[1, 2], [1, -2]]);
assert.deepEqual(Raices(1, 1, 1), [[-0.5, Math.sqrt(3)/2], [-0.5, -Math.sqrt(3)/2]]);