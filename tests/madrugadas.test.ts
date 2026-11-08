import {test} from 'node:test';
import assert from 'node:assert/strict';
import {completeDay,remainingUnlockTime} from '../src/services/journey.ts';
import {days,bonuses} from '../src/content/catalog.ts';
import {authService,storage} from '../src/services/authService.ts';
test('links recebidos estão associados aos sete dias, na ordem exata',()=>{
 assert.deepEqual(days.map(d=>d.videoId),['AZOKp8tcQLs','hG_jEu4mVmo','Nl7zKlb_4kE','wWxXvVOKLn4','zCESmxLVmvg','WNy-hw4sAyM','fvnBwJjkWw8']);
 assert.equal(new Set(days.map(d=>d.image)).size,7);assert.equal(bonuses.length,4);
});
test('conclusão é idempotente, permite dias fora da ordem e preserva a entrada',()=>{
 const original=[3];assert.deepEqual(completeDay(original,1),[1,3]);assert.deepEqual(original,[3]);assert.deepEqual(completeDay([1,3],1),[1,3]);assert.throws(()=>completeDay([],8));
});
test('os bônus ficam bloqueados até o instante exato das 72 horas',()=>{
 const first=1700000000000,unlock=first+72*3600000;
 assert.equal(remainingUnlockTime(first,first,72),259200000);
 assert.equal(remainingUnlockTime(first,unlock-1,72),1);
 assert.equal(remainingUnlockTime(first,unlock,72),0);
 assert.equal(remainingUnlockTime(first,unlock+86400000,72),0);
 assert.equal(remainingUnlockTime(first,first-1000,72),259200000);
});
test('reentrada preserva primeiro acesso e progresso; cada e-mail possui seus próprios dados',async()=>{
 const values=new Map<string,string>();
 Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{getItem:(k:string)=>values.get(k)??null,setItem:(k:string,v:string)=>values.set(k,v),removeItem:(k:string)=>values.delete(k)}});
 const maria=await authService.login('MARIA@EXEMPLO.COM','Maria');
 storage.save({...maria,completed:[1,4]});authService.logout();
 assert.equal(storage.session(),null);
 const joao=await authService.login('joao@exemplo.com','João');assert.deepEqual(joao.completed,[]);
 authService.logout();const again=await authService.login('maria@exemplo.com');
 assert.equal(again.firstAccessAt,maria.firstAccessAt);assert.deepEqual(again.completed,[1,4]);
});
