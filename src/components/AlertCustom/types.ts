export interface AlertCustomProps {
    title?: string;
    subtitle?: string;
    isHidden?: boolean;
    editPath?: string;
    deletePath?: string;
    onClose?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
  }