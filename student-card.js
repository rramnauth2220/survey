var age_groups = ["Infant", "Child", "Teenager", "Adult", "Senior"];
var ethnicity_groups = ["Multi-Ethnic", "Ethnic-Minority", "Ethnic-Majority"];
var disability_groups = ["Physical", "Mental", "None"];
var gender_groups = ["Female", "Male", "Other"];
var performance_options = [1, 4, 3];
var performance_total = 5;

function getAge(){
	return age_groups[Math.floor(Math.random() * age_groups.length)]
}

function getEthnicity(){
	return ethnicity_groups[Math.floor(Math.random() * ethnicity_groups.length)]
}

function getDisability(){
	return disability_groups[Math.floor(Math.random() * disability_groups.length)]
}

function getGender(){
	return gender_groups[Math.floor(Math.random() * gender_groups.length)]
}

function getPerformance(){
	return performance_options[Math.floor(Math.random() * performance_options.length)] 
}

function getPerformanceItems(){
	var correctness = getPerformance();
	var arr = [];
	var performance_arr = [];
	while(arr.length < correctness){
		var r = Math.floor(Math.random() * performance_total);
		if(arr.indexOf(r) === -1) arr.push(r);
	}
	
	for (var i = 0; i < performance_total; i++){
		if (arr.indexOf(i) === -1) performance_arr.push(0);
		else performance_arr.push(1);
	}
	
	return performance_arr
}

function getPerformanceTable() {
	//var performance_trs = .getElementsByTagName("tr");
	var performance_gen = getPerformanceItems();
	//console.log(performance_gen);
	var performance_temp_innerHTML = "";
	for (var j = 0; j < performance_gen.length; j++){
		performance_temp_innerHTML += '<tr><td class="icon-xl ' + (performance_gen[j] === 0 ? "icon-danger" : "icon-success") + '"> <i class=' + (performance_gen[j] === 0 ? '"fas fa-times"' : '"fas fa-check"') + '></i> </td><td colspten="1"> <div class="performance-item"> ' + (performance_gen[j] === 0 ? "0" : "1") + ' </div> </td></tr>'
	}
	
	return performance_temp_innerHTML;
	//document.getElementById("a_performance").innerHtml = performance_temp_innerHTML;
}

/*
<table id="a_performance" class="table-bordered" width="100%" cellspacing="0">
	<tr>
	  <td class="icon-xl icon-success"> <i class="fas fa-check"></i> </td>
	  <td colspten="1"> <div class="performance-item"> . </div> </td>
	</tr>
	<tr>
	   <td class="icon-xl icon-success"> <i class="fas fa-check"></i> </td>
	   <td colspan="1"> <div class="performance-item"> . </div> </td>
	</tr>
	<tr>
	   <td class="icon-xl icon-danger"> <i class="fas fa-times"></i> </td>
	   <td colspan="1"> <div class="performance-item"> . </div> </td>
	</tr>
	<tr>
	   <td class="icon-xl icon-success"> <i class="fas fa-check"></i> </td>
	   <td colspan="1"> <div class="performance-item"> . </div> </td>
	</tr>
	<tr>
	   <td class="icon-xl icon-danger"> <i class="fas fa-times"></i> </td>
	   <td colspan="1"> <div class="performance-item"> . </div> </td>
	</tr>
</table>
*/