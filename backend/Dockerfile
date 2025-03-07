# Use uma imagem base do Python
FROM python:3.11-slim

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo requirements.txt para dentro do container
COPY requirements.txt /app/

# Instale as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copie todos os arquivos do projeto para dentro do container
COPY . /app/

# Exponha a porta que o Django vai rodar
EXPOSE 8000

# Comando para rodar o Django no modo de desenvolvimento
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
