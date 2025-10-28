import React from 'react';
import './Card.css';

export interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  footer
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      {(description || children) && (
        <div className="card-body">
          {description && <p className="card-description">{description}</p>}
          {children}
        </div>
      )}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
