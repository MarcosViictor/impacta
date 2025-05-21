import json
import logging
import os
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Optional

class CustomJSONFormatter(logging.Formatter):
    def format(self, record: logging.LogRecord) -> str:
        log_data = {
            "timestamp": datetime.utcnow().isoformat(),
            "level": record.levelname,
            "message": record.getMessage(),
            "module": record.module,
            "function": record.funcName,
            "line": record.lineno,
        }
        
        # Adiciona user_id se disponível
        if hasattr(record, 'user_id'):
            log_data['user_id'] = record.user_id
            
        # Adiciona dados extras se disponíveis
        if hasattr(record, 'extra_data'):
            log_data.update(record.extra_data)
            
        return json.dumps(log_data)

class Logger:
    def __init__(self, name: str = "impacta"):
        self.logger = logging.getLogger(name)
        self.logger.setLevel(logging.INFO)
        
        # Cria diretório de logs se não existir
        log_dir = Path("logs")
        log_dir.mkdir(exist_ok=True)
        
        # Configura handler para arquivo
        log_file = log_dir / f"{name}.json"
        file_handler = logging.FileHandler(log_file)
        file_handler.setFormatter(CustomJSONFormatter())
        self.logger.addHandler(file_handler)
        
        # Configura handler para console
        console_handler = logging.StreamHandler()
        console_handler.setFormatter(CustomJSONFormatter())
        self.logger.addHandler(console_handler)

    def _log(self, level: int, message: str, user_id: Optional[str] = None, **kwargs):
        extra = {'user_id': user_id}
        if kwargs:
            extra['extra_data'] = kwargs
        self.logger.log(level, message, extra=extra)

    def info(self, message: str, user_id: Optional[str] = None, **kwargs):
        self._log(logging.INFO, message, user_id, **kwargs)

    def warning(self, message: str, user_id: Optional[str] = None, **kwargs):
        self._log(logging.WARNING, message, user_id, **kwargs)

    def error(self, message: str, user_id: Optional[str] = None, **kwargs):
        self._log(logging.ERROR, message, user_id, **kwargs)

# Instância global do logger
logger = Logger() 