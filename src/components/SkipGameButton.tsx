import React from 'react';
import { Button } from '@/shared/components/button';

interface SkipGameButtonProps {
  onSkip: () => void;
}

const SkipGameButton: React.FC<SkipGameButtonProps> = ({ onSkip }) => {
  return (
    <Button onClick={onSkip}>
      Новая игра
    </Button>
  );
};

export default SkipGameButton;