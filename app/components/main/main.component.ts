import { Component, OnInit } from '@angular/core';
import { GetJokeService } from 'src/app/shared/services/get-joke.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  arrayJokes: Array<any> = []
   dialogueNumber:number
   true0:boolean = true
   true1:boolean = false
   true2:boolean = false
   true3:boolean = false
   true4:boolean = false
   TimeArray = []
  // Friends = ['Dracula','Negan','The Godfather','Alex DeLarge','Jake','Sally']
  // ForeverAlone = ['Dracula','Negan','The Godfather','Alex DeLarge','Jake','Sally']
  Friends = ['Dracula','Negan','The Godfather','Alex DeLarge','Ramsay Bolton']
  ForeverAlone = ['Dracula','Negan','The Godfather','Alex DeLarge','Ramsay Bolton']
  search = []

  //  dialogue1= ["Listen to them. Children of the night. What music they make." ]
  //  dialogue2= ["You can breathe. You can blink. You can cry… Hell, they’re all gonna be doing that." ]
  //  dialogue3=  ["Keep your friends close, but your enemies closer."]
  //  dialogue4= ["A glass of milk and good old ultra-violence" ]
  //  dialogue5= ["aaaaaaaaaaaaaaaaaaaaaaaaaaaa."]
  
  dialogue = [
    "Listen to them. Children of the night. What music they make."  ,
    "You can breathe. You can blink. You can cry… Hell, they’re all gonna be doing that."  ,
     "Keep your friends close, but your enemies closer." ,
      "A glass of milk and good old ultra-violence"  ,
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaa." ,
    ]
    dialogues0 = [
      ["Hello" ,'3/22/20,4:10 AM' , "The blood is the life!" ,'3/22/20,4:11 AM' ] ,
      
      ["Some motivation?" ,'3/22/20,4:10 AM' , 'We learn from failure, not from success!' ,'3/22/20,4:11 AM' ] ,
     
      ["When will you arive?" ,'3/22/20,4:10 AM' ,       "Denn die Todten reiten Schnell. (For the dead travel fast.)",'3/22/20,4:11 AM' ] ,
     
 
    ]
    // dialogues0 = [
    //   "Listen to them. Children of the night. What music they make."   ,
    //    "Listen to them. Children of the night. What music they make."  ,
    //    "Listen to them. Children of the night. What music they make."   ,
    //    "Listen to them. Children of the night. What music they make."  ,
    //    "Listen to them. Children of the night. What music they make."   ,
    // ]
    dialogues1 = [
      ["Listen to them. Children of the night. What music they make." ,'3/22/20,4:10 AM' , "Hot diggety dog! This place is magnificent!" ,'3/22/20,4:11 AM' ] ,
      ["Liвфівф make." ,'3/22/20,4:10 AM' , "daфівфвфвфіda" ,'3/22/20,4:11 AM' ] ,
      ["вфівфвake." ,'3/22/20,4:10 AM' , "dвфісясясявфda" ,'3/22/20,4:11 AM' ] ,
      ["Lвфівфвф" ,'3/22/20,4:10 AM' , "dвясясяіфsda" ,'3/22/20,4:11 AM' ] ,
      ["Lisвфвфвфe." ,'3/22/20,4:10 AM' , "вчясячсіa" ,'3/22/20,4:11 AM' ] ,
    ]
    dialogues2 = [
      ["How are you old man?" ,'3/22/20,4:10 AM' , "I like to drink wine more than I used to." ,'3/22/20,4:11 AM' ] ,
      ["It's good for ya." ,'3/22/20,4:10 AM' , "Anyway I'm drinkin' more." ,'3/22/20,4:11 AM' ] ,
       
    ]
    dialogues3 = [
      ["Oh, yes. I understand you're fond of music. I have arranged a little surprise for you." ,'3/22/20,4:10 AM' , "Surprise?" ,'3/22/20,4:11 AM' ] ,
      ["One that I hope that you will like. As a um... how shall we put it? As a symbol of our new understanding. An understanding between two friends." ,'3/22/20,4:10 AM' , "What's that?" ,'3/22/20,4:11 AM' ] ,
      
    ]
    dialogues4 = [
      ["Hi!" ,'3/22/20,4:10 AM' , "If you think this has a happy ending, you haven’t been paying attention.",'3/22/20,4:11 AM' ] ,
      [ 'How are you?' ,'3/22/20,4:10 AM' , "Jealousy bores me. You remember what happens to people who bore me." ,'3/22/20,4:11 AM' ] ,
      ["Good idea." ,'3/22/20,4:10 AM' , "I prefer being an only child." ,'3/22/20,4:11 AM' ] ,
      ["Interesting" ,'3/22/20,4:10 AM' , "I'm a man of mercy" ,'3/22/20,4:11 AM' ] ,
     
    ]
  // 
   show:number = 5;
  messages =  []
  x:number = 0
  n:number = 1
allD = [


  ["Listen to them. Children of the night. What music they make." , 'Dracula' , "Feb 18,1931" ,'../../../assets/images/Dracula.jpg'],
  ["You can breathe. You can blink. You can cry… Hell, they’re all gonna be doing that." , 'Negan' , "Aug 3,2018" ,'../../../assets/images/Negan.jpg'],
   ["Keep your friends close, but your enemies closer." , 'The Godfather' , "Sep 21,1974" ,'../../../assets/images/GodFather.jpg'],
 ["A glass of milk and good old ultra-violence" , 'Alex DeLarge' , "Nov 22,1997" ,'../../../assets/images/Milk.jpg'],
        ["If you think this has a happy ending, you haven’t been paying attention." , 'Ramsay Bolton' , "Jen 2,2021" ,'../../../assets/images/Ramsay.jpg'],
]
  // messages1 = ["Listen to them. Children of the night. What music they make." , 'Dracula' , "Feb 18,1931" ,'https://i.ytimg.com/vi/Fapvnqh_93k/maxresdefault.jpg ']
  // messages2 = ["You can breathe. You can blink. You can cry… Hell, they’re all gonna be doing that." , 'Dracula' , "Aug 3,2018" ]
  // messages3 = ["Keep your friends close, but your enemies closer." , 'The Godfather' , "Sep 21,1974" ]
  // messages4 = ["No one is ever satisfied where he is." , 'Dracula' , "Feb 18,1931" ]
  // messages5 = ["Listen to them. Children of the night. What music they make." , 'Dracula' , "Feb 18,1931" ]

  // 
  constructor(private JokeService: GetJokeService) { }
  
  ngOnInit(): void {
this.getMessage()
  }
public getMessage():void {
  this.JokeService.getJokes().subscribe(
    data => {
      this.arrayJokes.push(data['value'])
      this.dialogue.push(data['value'])
      console.log('here data ', data['value'] )
      console.log('here Jokes ', this.arrayJokes)
    },
    error => (console.log('Error!', error))
  )
}
onSearchChange(searchValue: string): void {  
 if(searchValue == ''){
  this.Friends = this.ForeverAlone
 }
 if(searchValue){
   console.log(searchValue)
   this.Friends =  this.Friends.filter(word => word.indexOf(searchValue) > -1 );
  console.log(this.Friends)
  console.log(this.search)
 }
}
 time():void{
  setTimeout(() =>  document.querySelector('.forMessages').scrollTop += document.querySelector('.forMessages').clientHeight+ 100000   , 100);
 }
addingMessage(messagetValue: string): void {  
 if( messagetValue != ''){
   console.log('!!!!!!!!!',this.x)
  this.n += 1 ;
  if(this.x == 0){
    this.today  = new Date().toLocaleString()
      this.dialogues0.push( [messagetValue , this.today  ,  this.dialogue[this.dialogue.length-1] , this.today  ])
 
    
    console.log('000' ,this.dialogues0)
  //get container element
  // document.querySelector('.forMessages').scrollTop += document.querySelector('.forMessages').clientHeight   ;
//scroll down
// container.scrollTop = container.scrollHeight;
// container.scrollIntoView(false)
// let topPos = container.offsetTop;
// .scrollTop = topPos;
  }
  if(this.x == 1){
     
    this.today  = new Date().toLocaleString('es-US')
    this.dialogues1.push( [messagetValue , this.today  ,  this.dialogue[this.dialogue.length-1] , this.today  ])

  
  console.log('111' ,this.dialogues1)
}
if(this.x == 2){
     
  this.today  = new Date().toLocaleString('es-US')
    this.dialogues2.push( [messagetValue , this.today  ,  this.dialogue[this.dialogue.length-1] , this.today  ])

  
  console.log('222' ,this.dialogues2)
}
if(this.x == 3){
     
  this.today  = new Date().toLocaleString('es-US')
    this.dialogues3.push( [messagetValue , this.today  ,  this.dialogue[this.dialogue.length-1] , this.today  ])

  
  console.log('33' ,this.dialogues3)
}
if(this.x == 4){
     
  this.today  = new Date().toLocaleString('es-US')
  this.dialogues4.push( [messagetValue , this.today  ,  this.dialogue[this.dialogue.length-1] , this.today  ])


console.log('444' ,this.dialogues4)
}
// console.log(this.true0,this.true1,this.true2,this.true3,this.true4)
//   console.log(this.arrayJokes)
  // this.dialogue.push(messagetValue )
  this.getMessage()
  this.time()
}}
userChoosen(userId: any): void { 
  console.log(userId)
 
   this.x = userId.substr(userId.length - 1)
   this.dialogueNumber ==  this.x
   if(this.x == 0){
   this.true0  = true,this.true1  = false,this.true2  = false,this.true3  = false,this.true4   = false
   console.log(this.true0,this.true1,this.true2,this.true3,this.true4)
    
   }
   if(this.x == 1){
    this.true0  = false,this.true1  = true  ,this.true2  = false,this.true3  = false,this.true4   = false
    console.log(this.true0,this.true1,this.true2,this.true3,this.true4)
    }
    if(this.x == 2){
      this.true0  = false,this.true1  = false,this.true2 = true ,this.true3  = false,this.true4   = false
      console.log(this.true0,this.true1,this.true2,this.true3,this.true4)
      }
      if(this.x == 3){
        this.true0  = false,this.true1  = false,this.true2  = false,this.true3 = true  ,this.true4   = false
        console.log(this.true0,this.true1,this.true2,this.true3,this.true4)
        }
        if(this.x == 4){
          this.true0 = false,this.true1  = false,this.true2  = false,this.true3  = false,this.true4  = true  
          console.log(this.true0,this.true1,this.true2,this.true3,this.true4)
          }
}
today:string
 
}
 
