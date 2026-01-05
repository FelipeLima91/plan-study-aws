# Sobre o Armazenamento de Dados

## Por que localStorage?

O projeto utiliza **localStorage** para persistir os dados do usuário (checklists, anotações, data da prova e tema). Esta é a escolha mais adequada para este caso de uso pelos seguintes motivos:

### ✅ Vantagens do localStorage

1. **Simplicidade**: Não requer backend ou banco de dados
2. **Performance**: Acesso instantâneo, sem requisições de rede
3. **Privacidade**: Dados ficam apenas no dispositivo do usuário
4. **Offline**: Funciona completamente offline
5. **Sem custos**: Não há custos de servidor ou banco de dados
6. **Adequado para dados pessoais**: Checklists e anotações são dados pessoais que não precisam ser compartilhados

### 📊 Capacidade

- **Limite**: ~5-10MB por domínio (depende do navegador)
- **Este projeto**: Usa menos de 1MB, bem dentro do limite

## Alternativas e Quando Usar

### 1. **IndexedDB** (Melhor para dados maiores)
```typescript
// Use quando:
// - Precisa armazenar mais de 5MB
// - Precisa de queries complexas
// - Precisa de transações
```
- ✅ Mais espaço (centenas de MB)
- ✅ Queries e índices
- ❌ Mais complexo de implementar
- ❌ Overkill para este projeto

### 2. **SessionStorage** (Dados temporários)
```typescript
// Use quando:
// - Dados devem ser limpos ao fechar a aba
```
- ✅ Limpa automaticamente ao fechar a aba
- ❌ Não persiste entre sessões
- ❌ Não adequado para este caso

### 3. **Backend + Banco de Dados** (Dados compartilhados)
```typescript
// Use quando:
// - Precisa sincronizar entre dispositivos
// - Precisa de backup na nuvem
// - Múltiplos usuários
```
- ✅ Sincronização entre dispositivos
- ✅ Backup automático
- ❌ Requer servidor (custos)
- ❌ Requer autenticação
- ❌ Mais complexo

### 4. **React Context + State** (Apenas em memória)
```typescript
// Use quando:
// - Dados temporários da sessão
// - Não precisa persistir
```
- ✅ Muito rápido
- ❌ Perde dados ao recarregar
- ❌ Não adequado para este caso

## Recomendação para Este Projeto

**localStorage é a melhor escolha** porque:

1. ✅ Dados são pessoais e não precisam ser compartilhados
2. ✅ Volume de dados é pequeno (checklists e anotações)
3. ✅ Não requer backend ou custos adicionais
4. ✅ Funciona offline
5. ✅ Implementação simples e confiável

## Melhorias Futuras (Opcional)

Se no futuro quiser adicionar sincronização entre dispositivos:

1. **Firebase Firestore** - Gratuito até certo limite, fácil de integrar
2. **Supabase** - Open source, similar ao Firebase
3. **AWS Amplify** - Se já estiver usando AWS
4. **Backend próprio** - Node.js + PostgreSQL/MongoDB

Mas para um plano de estudos pessoal, localStorage é perfeito! 🎯
