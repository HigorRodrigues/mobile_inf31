import { Injectable	}	from	'@angular/core';
import { Peca } from '../model/peca.model';
import { Guid }	from	'guid-typescript';
import { Storage }	from	'@ionic/storage-angular';

@Injectable({
		providedIn:	'root'
})

export class	PecasService	{

  constructor(
      private	storage:	Storage
  )	{	}

  async	update(peca:	Peca)	{
    if(peca.id.isEmpty())	{
      peca.id	=	Guid.create();
    }
    this.storage.set(peca.id.toString(),	JSON.stringify(peca));
  }

  async getById(id: string): Promise<Peca>{
    const pecaString = await this.storage.get(id);
    return JSON.parse(pecaString);
  }

  async getAll() {
    let pecas: Peca[] = [];
    try {
        await this.storage.forEach((value: string, key: string) => {
            const peca: Peca = JSON.parse(value);
            pecas.push(peca);
        });
        return pecas;
    } catch (error) {
        return error;
    }
  }
}
