const sathish=[
 {
	 first_name:'mike',
	 last_name:'s.v.karai'
 },
 {
	 first_name:'tim',
	 last_name:'kenya'
 },
 {
	 first_name:'john',
	 last_name:'japan'
 }
 ];
  var b=[];
sathish.map(function(a){
	b.push(` ${a.first_name}lives in${a.last_name}`);
 
 
}	
 
 );
 console.log(b);