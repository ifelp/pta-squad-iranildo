export const mailTemplate = (
    medico: string,
    nomeResponsavel: string,
    nomePaciente: string,
    data: string,
    hora: string,

) => {
  return `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
          background-color: #f8f9fa;
          padding: 10px 0;
          text-align: center;
          font-size: 22px;
          color: #4CAF50;
        }
        .content {
          padding: 20px 0;
          font-size: 16px;
          color: #333;
        }
        .footer {
          text-align: center;
          color: #888;
          font-size: 14px;
          padding-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          🐾 Confirmação de Consulta
        </div>
        <div class="content">
          <p>Olá <strong>${nomeResponsavel}</strong>,</p>
          <p>Sua consulta para o(a) <strong>${nomePaciente}</strong> foi agendada com sucesso!</p>
          <p><strong>📅 Data:</strong> ${data}</p>
          <p><strong>🕒 Horário:</strong> ${hora}</p>
          <p><strong>👩‍⚕️ Veterinário(a):</strong> ${medico}</p>
          <p>Por favor, chegue com 10 minutos de antecedência e traga a carteirinha de vacinação.</p>
        </div>
        <div class="footer">
          EQUIPE CITI<br />
          Obrigado por confiar na gente!
        </div>
      </div>
    </body>
  </html>
  `
}
