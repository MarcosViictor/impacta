from .logging import logger

def exemplo_uso_logger():
    # Log básico de informação
    logger.info("Aplicação iniciada")
    
    # Log com identificação de usuário
    logger.info("Usuário fez login", user_id="12345")
    
    # Log de warning com dados extras
    logger.warning(
        "Tentativa de acesso a recurso não autorizado",
        user_id="12345",
        resource="/api/admin",
        ip="192.168.1.1"
    )
    
    # Log de erro com stack trace
    try:
        1/0
    except Exception as e:
        logger.error(
            "Erro ao processar requisição",
            user_id="12345",
            error=str(e),
            request_id="req-123"
        )

if __name__ == "__main__":
    exemplo_uso_logger() 