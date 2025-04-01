import React from 'react';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, onClick }) => {
  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'transform 0.2s ease-in-out',
    ':hover': {
      transform: 'translateY(-4px)',
    },
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as const,
    borderRadius: '4px',
    marginBottom: '12px',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  };

  const contentStyle = {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.5',
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} style={imageStyle} />}
      <h3 style={titleStyle}>{title}</h3>
      <p style={contentStyle}>{content}</p>
    </div>
  );
};

export default Card; 