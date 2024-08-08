function aimcopev1() { 
        function searchAndReplace(searchValue, 
        replaceValue, 
        type) { 
        h5gg.clearResults(); h5gg.searchNumber(searchValue, 
        type, 
        '0x100000000', 
        '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) { 
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}} 
        searchAndReplace(0.09, 180, 'F32')} 
 
 
 
   function norecoi() { 
        function searchAndReplace(searchValue, replaceValue, type) { 
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) { 
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}} 
        searchAndReplace(1016018816, 180, 'I32')} 
 
 
   
  function aim180() { 
  function searchAndReplace(searchValue, replaceValue, type) { 
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) { 
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}} 
        searchAndReplace(1053273620, -2000, 'I32') 
  searchAndReplace(1057048494, -2000, 'I32') 
        searchAndReplace(1054951342, -2000, 'I32') 
 
  } 
 
 
        function nhetam() { // xóa hoạt ảnh // 
        function searchAndReplace(searchValue, replaceValue, type) { 
        h5gg.clearResults(); 
        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); 
        var results = h5gg.getResults(h5gg.getResultsCount()); 
        for (var i = 0; i < results.length && i < 10; i++) { 
            h5gg.setValue(results[i].address, replaceValue.toString(), type); 
        } 
    } 
    searchAndReplace(3145840, 49, 'I32'); 
} 
 
 
  function hscu() { 
        function searchAndReplace(searchValue, replaceValue, type) { 
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x200000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) { 
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}} 
        searchAndReplace(2018908708, 96688289, 'I32')} 


        function aimcopev2() { 
        function searchAndReplace(searchValue, 
        replaceValue, 
        type) { 
        h5gg.clearResults(); h5gg.searchNumber(searchValue, 
        type, 
        '0x100000000', 
        '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) { 
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}} 
        searchAndReplace(1075000115, -5, 'F32')} 
         


function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) { 
    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> { 
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) { 
            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++; 
        }}); if (modifiedCount > 0) { 
        if (alertMessage)alert(alertMessage)} else if (alertMessage) { 
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}} 
var Nhayman = 15; 
var nhayngam = 10; 
 
function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) { 
    h5gg.clearResults(); 
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000'); 
    const results = h5gg.getResults(h5gg.getResultsCount()); 
    let modifiedCount = 0; 
 
    results.forEach(result => { 
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) { 
            h5gg.setValue(result.address, replaceValue.toString(), 'F32'); 
            modifiedCount++;

if (searchValue === Nhayman) Nhayman = replaceValue; 
            if (searchValue === nhayngam) nhayngam = replaceValue; 
        } 
    }); 
 
    if (modifiedCount > 0 && alertMessage) { 
        alert(alertMessage); 
    } else if (alertMessage) { 
        alert("Không tìm thấy kết quả phù hợp để thay đổi."); 
    } 
} 
 


function buffnhay() { 
    modifyValue1(nhayngam, Number(prompt("Nhập Độ Nhạy Màn Hình :", "")), 'BB4', null, 'Đã Thay Đổi Độ Nhạy Màn Hình'); 
    modifyValue1(Nhayman, Number(prompt("Nhập Độ Nhạy Kéo Tâm :", "")), 'BAC', null, 'Đã Thay Đổi Độ Nhạy Kéo Tâm'); 
} 


function aimlock() { 
    modifyValue(1077936128, -20000, 'A04');  
    modifyValue(1069547520, 1148829696, 'A10')}

