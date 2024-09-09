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
    await	this.storage.create();
    if	(peca.id.isEmpty())	{
      peca.id	=	Guid.create();
    }
    this.storage.set(peca.id.toString(),	JSON.stringify(peca));
  }
}
