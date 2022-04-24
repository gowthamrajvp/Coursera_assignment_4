var names=new Array();
names[0]="Gowtham";
names[1]="ram";
names[2]="jeeva";
names[3]="puvi";
names[4]="sudha";
names[5]="keerthana";
names[6]="anu";
names[7]="jiva";
names[8]="sam";
names[9]="saran";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
