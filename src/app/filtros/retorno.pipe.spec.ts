import { pipe } from 'rxjs';
import { RetornoPipe } from './retorno.pipe';

describe('RetornoPipe', () => {
  const pipe = new RetornoPipe();
  it('create an instance', () => {
    const pipe = new RetornoPipe();
    expect(pipe).toBeTruthy();
  });
  it('deve exibir mensagem contendo 15 elementos', () => {
    const resultado = pipe.transform(15);
    expect(resultado).toBe('Exibindo os primeiros 15 resultados.');
  });

});
