import { Ijoke } from '../interfaces/joke.interface';

export  class Joke implements Ijoke {
 constructor(
   public  created_at:string,
   public  value:string,
 ){}
}