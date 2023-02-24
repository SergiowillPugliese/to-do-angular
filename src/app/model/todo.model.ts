
export class ToDo {
  constructor(
    public id: number,
    public task: string,
    public tipo: string,
    public important: boolean,
    public shared: boolean,
    public data: string
  ){}
}
