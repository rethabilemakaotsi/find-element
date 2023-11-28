
function difference(arr1, arr2) {
  const combinedArray = arr1.concat(arr2.flat(Infinity));
  const uniqueElements = [...new Set(combinedArray)];
  const result = uniqueElements.map((element) => String(element));
  return result;
}

function findUniqueElements() {
  const inputArray1 = document.getElementById('array1').value.split(',').map(item => parseFloat(item.trim()));
  const inputArray2 = document.getElementById('array2').value.split(',').map(item => parseFloat(item.trim()));

  const result = difference(inputArray1, inputArray2);

  document.getElementById('result').innerText = 'Unique Elements: ' + JSON.stringify(result);
}

  


