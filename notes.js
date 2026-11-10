/*session 37
1- when i put $ at the last of variable name commenly its means thats data will come

2- if i have a data put i need it after some time then we use of()
    user$= of({name:"basmala",age;20}).pipe(delay(1000));

3- @let user=User$ | async ;
@if(user){
{{user.name}}
}

  user$= of({name:"basmala",age;20}).pipe(delay(1000));

4- top use Async we must use import AsyncPipe

5- @defer{
      mainContent
}@placeholder{
      waitingContent
}@loading[
      loading
]@error{
      on error
}

6- on idle => when the web run show on it
 @defer(on idle){
      mainContent
}@placeholder{
      waitingContent
}

7- ViewPort
@defer(on viewport(Btn)){
      mainContent
}@placeholder{
      waitingContent
}

8- interaction => when any action happen do that...
@defer(on action (Btn)){
      mainContent
}@placeholder{
      waitingContent
}

9- Timer
@defer(on timer (2s)){
      mainContent
}@placeholder{
      waitingContent
}

10- when() means when .... is true

11-  we can put more than on thing on defer (if that or that happen)

12- Angular was use zone.js but ut was have a big problem such as when a small edit happen to some thing angular dont know
this edit from where and it refresh all the tree of components(that reduce the performance in laarge projects)

13- signlas solve that problem and we now use it and zoneless

14- to create signal 
      count = signal(0);
      change(){
        this.count.set(5);
      }

15- if i want to +1 to signal
       count = signal(0);
      change(){
        this.count.set(this.count()+1);
      }

16- if i want to use set we must spread the signal firstly

16- Ex:
      User = signal ([{name;bnasmala,age:20}])
      changeUser({
      this.user.set({name;"ahmed",age;22})
      })

17- user=signal({name;basmala,age:20})
      changeUser(){
      this.user.set(){
      ...this.user(),
      age:40;
      }}


18- set and update edit on signal but the difffrence
set take that value directly
update take function

19- count=signal(0);
change(){
this.count.update((val)=>{
  return val+1;
  })
}

20- change(){
this.user.update((val)=>{
  return{
  ...val,
  age:++val.age
  }
  })
}

21- we have computed we use it  to make the signal dynamic and it take a function
the idea it create signal depend on another signals

22- computed create read-only signal 
because that we cant change it by set,update







*/
