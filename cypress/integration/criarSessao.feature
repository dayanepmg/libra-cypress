Feature: Criar Sessão

        Scenario: Criar sessão no libra
            Given acesse a página inicial do Libra
              And verifico a Origem
              And acesso a página de controle de sessões
             When clico no botão NOVO
              And checo o campo Sessão Virtual
              And seleciono o Tipo "ORDINARIA - 111878"
              And informo a data de início
              And seleciono o Presidente "LEONARDO DE NORONHA TAVARES - 4795"
              And checo o campo Liberar Voto Relator
              And checo o campo Liberar Voto Vista
              And checo o campo Liberar Relatório
             When clico no botão SALVAR
             Then verifico que a sessão foi criada com sucesso
            Given acesse a página Central de Consultas
              And informo o período
              And seleciono os seguintes campos:
                  | Situação     | Vara/Câmara                 |
                  | EM ANDAMENTO | 2ª TURMA DE DIREITO PRIVADO |
             When clico no botão PESQUISAR
            # Then gravo em um arquivo o número dos processos pesquisados
