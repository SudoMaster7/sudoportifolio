# Guia de Configuração: Planilha de Leads Automática

Para que seus contatos (Newsletter e Formulários) sejam salvos automaticamente em uma planilha do Google, siga estes passos. É gratuito e leva 5 minutos.

## 1. Crie a Planilha
1. Acesse [google.sheets.com](https://docs.google.com/spreadsheets) e crie uma **Planilha em Branco**.
2. Nomeie como **"Leads SUDO"**.
3. Na primeira linha, crie os cabeçalhos (exatamente assim):
   *   Coluna A: `data`
   *   Coluna B: `tipo` (Newsletter, Contato, Demo)
   *   Coluna C: `nome`
   *   Coluna D: `contato` (Email ou Telefone)
   *   Coluna E: `detalhes` (Empresa, Mensagem, etc.)

## 2. Crie o Script de Automação
1. Na planilha, clique em **Extensões** > **Apps Script**.
2. Apague qualquer código que estiver lá e cole este:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.type || 'Lead',
    data.name || '-',
    data.contact || '-',
    data.details || '-'
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Clique no ícone de **Disquete (Salvar)**. Nomeie o projeto como "API Leads".

## 3. Publique como Web App
1. No topo direito, clique em **Implantar** (Deploy) > **Nova implantação**.
2. Clique na engrenagem (ao lado de "Selecione o tipo") e escolha **App da Web**.
3. Configure assim:
   *   **Descrição**: API Leads
   *   **Executar como**: *Eu (seu email)*
   *   **Quem pode acessar**: **Qualquer pessoa** (Isso é importante para o site funcionar)
4. Clique em **Implantar**.
5. Autorize o acesso (Google vai pedir permissão, clique em *Avançado* > *Acessar (não seguro)* - é seguro, é seu script).
6. **COPIE A URL DO APP DA WEB** (é um link longo que termina com `/exec`).

## 4. Finalizar
Me envie este link URL ou altere ele no arquivo `src/services/GoogleSheetService.ts` (variável `SHEET_API_URL`).
