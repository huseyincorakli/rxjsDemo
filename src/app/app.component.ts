import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  combineLatest, concat, debounce, debounceTime, defer, distinct, filter, first, from, fromEvent, generate, iif, interval, last, map, merge, of, partition, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:`<h2>Rxjs</h2> <br>
 <p> <strong>Defer Operatörü:</strong> Observable nesnesini sub olunduğu anda oluşturmamızı sağlar</p>
 <p> <strong>From Operatörü:</strong> Koleksiyonel bir veriyi Observable olarak elde etmemizi sağlar</p>
 <p> <strong>From Event Operatörü:</strong> Herhangi bir nesenin belirtilen eventini yakalayarak obs nesnesi olarak sunar</p>
 <p> <strong>Generate Operatörü:</strong> Verilen şarta göre döngü oluşturarak Observable dönderir.</p>
 <p> <strong>Of Operatörü:</strong> Verilen herhangi bir değeri Observable olarak dönderir.</p>
 <p> <strong>Iif Operatörü:</strong> Verilen şarta göre verilen obslerden birini döner</p>
 <p> <strong>CombineLatest Operatörü:</strong> Verilen obslerin son değerlerini combine edererek dönderir</p>
 <p> <strong>Concat Operatörü:</strong> Verilen obsleri sırasıyla yayan obs döner</p>
 <p> <strong>Merge Operatörü:</strong> Verilen obsleri gelme hızlarına göre birleştrir ve obs döner</p>
 <p> <strong>Partion Operatörü:</strong> Verilen şarta göre obs nesnesi içerisinden şarta uyanlar ve uymayanlar olarak iki obs dönderir</p>
 <p> <strong>Pipe Fonksiyonu:</strong> Birden fazla operatör kullanma isteği doğrultusunda kullanılır </p>
 <p> <strong>Debounce Operatörü:</strong> Observable nesnesine subscribe olurken zamansal sınır koymamıza yarayan operatördür </p>
 <p> <strong>Distinct Operatörü:</strong> Akıştaki tekrar eden verileri tekil olarak döndürür </p>
 <p> <strong>Filter Operatörü:</strong> Filtereleme işlemi yapar </p>
 <p> <strong>First Operatörü:</strong> İlk değeri getirir </p>
 <button #abcd>Gönder</button>
 <input type="text" #txt>
 <p>{{abc}}</p>
  `
})
export class AppComponent  {
  title = 'rxjsDemo';
  private readonly platformId = inject(PLATFORM_ID);
  abc=""
  @ViewChild('abcd',{static:true}) btn:ElementRef
  @ViewChild('txt',{static:true}) txt:ElementRef
  //#region defer
  // obs1= defer(()=>of(new Date()));
  // obs2 = of(new Date())
  
  // ngOnInit(): void {
  //   timer(5000).subscribe(data=>{
  //     this.obs1.subscribe(data=>{
  //       console.log("defer ile",data);
  //     })
  //     this.obs2.subscribe(data=>{
  //       console.log("defer olmadan", data);
  //     })
  //   });
    
  // }
  //#endregion,
  
  //#region from
  // ngOnInit(): void {
  //   const sayilar = [5,20,56]
  //   const araclar =new Map<string,string>();
  //   araclar.set("Toyota","Hilux")
  //   araclar.set("Ford","Focus")
  //   araclar.set("Bmw","520")
    
  //   const obs =  from(sayilar);
  //   obs.subscribe(data=>{
  //       console.log(data+1);
  //   })

  //   const obs2= from(araclar);
  //   obs2.subscribe(data=>{
  //     data[0]="_Brand_"
  //     console.log(data);
            
  //   })
  // }
  //#endregion

  //#region  fromEvent
  // ngOnInit(): void {
    
  //  fromEvent(this.btn.nativeElement,"click").subscribe(e=>{
  //   console.log(e);
  //   this.btn.nativeElement.disabled=true;
  //  })
  // }
  //#endregion

  //#region  generate
  // ngOnInit(): void {
  //   const obs = generate(100,x=>x>0,x=>x=x-3).subscribe(data=>{
  //     console.log(data);
      
  //   })
  // }
  //#endregion

 //#region interval 
//  ngOnInit(): void {
//   if (isPlatformBrowser(this.platformId)) {
//     const obs1 = interval(5000);
//   obs1.subscribe(data=>{
//     this.abc=`Hello from ${(data*5).toString()} ${(data*5).toString()}`
    
//   })
//   }
//  }
 //#endregion


 //#region  of
//  ngOnInit(): void {
//    const abc ="aşlsdl";
//    var obs = of(abc)
//  }
 //#endregion

 //#region iif 
//  ngOnInit(): void {
//   iif(()=>false,of(1),of(2)).subscribe(data=>{
//     console.log(data);
//   })
// }
 //#endregion


 //#region combineLatest
//  ngOnInit(): void {
//    const obs1= of("a","b","c")
//    const obs2= of("123","321","231")
//    const obs3= of("a1","1b","c1")
//    const obs4= combineLatest(obs1,obs2,obs3)

//    obs4.subscribe(data=>{
//     console.log(data);
    
//    })
//  }
 ////#endregion 


 //#region concat
//  ngOnInit(): void {
//    const obs1=of("1","2","3")
//    const obs2=of("4","5","6")
//    const obs3=of("7","8","9")

//    concat(obs1,obs2,obs3).subscribe(data=>{
//     console.log(data);
//    })
//  }
 //#endregion

//#region merge 
// ngOnInit(): void {
//   const obs1=of("1","2","3")
//    const obs2=of("4","5","6")
//    const obs3=of("7","8","9")

//    merge(obs1,obs2,obs3).subscribe(data=>{
//     console.log(data);
//    })
// }
//#endregion


//#region  partion
// ngOnInit(): void {
//   const obs1=of(1,2,3,4,5,6,7,8,9,123,32,5,23)
//   const [obs2,obs3] = partition(obs1,x=>x%2==0)
//   obs2.subscribe(data=>{
//     console.log(data );
    
//   })
 
// }
//#endregion

//#region pipe
// ngOnInit(): void {
//   const obs1= of(1,2,4,234,123,56,43,23645,7,8768,985,4334,32,2);
//   obs1.pipe(filter(x=>x%2==0),map(x=>x*1000)).subscribe(data=>{
//     console.log(data);
//   })
// }
//#endregion

//#region debounce -debounceTime
// ngAfterViewInit(){
//   const obs1= fromEvent(this.txt.nativeElement,"keyup")
//   obs1.pipe(debounce(x=>interval(400))).subscribe(data=>{
//     console.log("değer girildi");
    
//   })
    
// }

// ngAfterViewInit(){
//   fromEvent(this.txt.nativeElement,"keyup").pipe(debounceTime(300)).subscribe(data=>{
//     console.log("değer girildi");
    
//   })
// }
//#endregion

//#region  distinct
// ngOnInit(){
//   const obs1 = of(1,2,3,4,6234,6,31,23,32512312,312,312432,5435,121,23,432,121,2,3,454,32,3122312,31)

//   obs1.pipe(distinct(x=>x)).subscribe(data=>console.log(data))
// }
//#endregion

//#region  filter & first & last
ngOnInit(){
  const obs2 = of("ahmet","mehmet","Abbas","Cenk","OsMan")
  obs2.pipe(filter(x=>x.indexOf("A")===-1 && x.indexOf("a")===-1),first()).subscribe(data=>{
    console.log(data );
    
  })
  obs2.pipe(filter(x=>x.indexOf("A")===-1 && x.indexOf("a")===-1),last()).subscribe(data=>{
    console.log(data );
    
  })
}
//#endregion



}
