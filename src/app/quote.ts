export class Quote {
  public upVotes:number
  public downVotes:number
  constructor(public quote:string,public author:string,public writerQuote:string,public postedTime:Date
)
  {
  this.upVotes=0;
  this.downVotes=0;
}
}
