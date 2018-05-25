export class Quote {
  public upVotes:number
  public downVotes:number
  public postedTime:Date
  constructor(public quote:string,public author:string,public writerQuote:string)
  {
  this.upVotes=0;
  this.downVotes=0
  this.postedTime=new Date()
}
}
