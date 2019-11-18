var fch = new Date(),dayofweek = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),monthofyear = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),fchM,fchD,fchY,fchDN,fchYS;
            
fchD=dayofweek[fch.getDay()];
fchDN=fch.getDate();
fchM=monthofyear[fch.getMonth()];
fchY=fch.getFullYear();

if((fchD == "Wednesday") || (fchD == "Thursday") || (fchD == "Friday") || (fchD == "Saturday") || (fchD == "Sunday")){
    switch(fchD){
        case "Wednesday":
            fchDN=fchDN+4;
            break;
        case "Thursday":
            fchDN=fchDN+3;
            break;
        case "Friday":
            fchDN=fchDN+2;
            break;
        case "Saturday":
            fchDN=fchDN+1;
            break;
        case "Sunday":
            fchDN=fchDN;
            break;
        default:
            fchDN=fchDN-1;
            break;
    }
    if(fchDN>31){
        fchDN=fchDN-31;
        fchYS=fch.getMonth()+1;
        if(fchYS>11){
            fchYS=fchYS-12;
        }
        fchM=monthofyear[fchYS];
    }
}else{
    fchY=fch.getFullYear()-1;
} 

console.log(fchD+" "+fchDN+" "+fchM+" "+fchY);