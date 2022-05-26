```
function calculaPrecoTotal(quantidade) {
quantidade=Number(quantidade)
let valotTotal=0
if (quantidade<12){
  valotTotal=quantidade*1.30
} else if (quantidade>=12){
  valotTotal=quantidade*1
}
return valotTotal
}
```