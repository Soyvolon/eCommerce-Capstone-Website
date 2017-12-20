function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function openCompDetails(type, doc) {
	if (typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
		localStorage.setItem("compType", type);
		window.location.href = doc;
	} else {
		// Sorry! No Web Storage support..
		setCookie("compType",type,1);
		window.location.href = doc;
	}
	
}
function changeComp(type) {
	localStorage.setItem("compType", type);
	start();
}
function start() {
	var compType;
	if (typeof(Storage) !== "undefined") {
		    // Code for localStorage/sessionStorage.
		    compType = localStorage.getItem("compType");
		} else {
		    // Sorry! No Web Storage support..
		    compType =  getCookie("compType");
		}
	if (compType != "") {
		switch (compType) {
			case "cv1":
				document.getElementById("cv1").style.display = '';

				document.getElementById("cv2").style.display = 'none';

				document.getElementById("cv3").style.display = 'none';

				document.getElementById("cv4").style.display = 'none';
				break;

			case "cv2":
				document.getElementById("cv1").style.display = 'none';

				document.getElementById("cv2").style.display = '';

				document.getElementById("cv3").style.display = 'none';

				document.getElementById("cv4").style.display = 'none';
				break;

			case "cv3":
				document.getElementById("cv1").style.display = 'none';

				document.getElementById("cv2").style.display = 'none';

				document.getElementById("cv3").style.display = '';

				document.getElementById("cv4").style.display = 'none';
				break;

			case "cv4":
				document.getElementById("cv1").style.display = 'none';

				document.getElementById("cv2").style.display = 'none';

				document.getElementById("cv3").style.display = 'none';

				document.getElementById("cv4").style.display = '';
				break;
		}
	} else {
		document.getElementById("cv1").style.display = '';

		document.getElementById("cv2").style.display = 'none';

		document.getElementById("cv3").style.display = 'none';

		document.getElementById("cv4").style.display = 'none';
	}
	if (typeof(Storage) !== "undefined") {
		    // Code for localStorage/sessionStorage.
		    localStorage.setItem("compType", "");
		} else {
		    // Sorry! No Web Storage support..
		    compType =  setCookie("compType", "", 0);
		}
}
// //Form Fill Infomation
// function addToOrder(item, cost) {

// 		order[item] = cost;
// 		alert(order[item]);

// }

// function getTotal() {
// 	var totalPrice = 0;
// 	for(var key in order) {
// 		totalPrice += order[key];
// 		alert(order[key]);
// 	}

// 	//temp code
// 	alert(totalPrice);
// 	//---------
// }