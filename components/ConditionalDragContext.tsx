import { DndContext, DragEndEvent, DragStartEvent, Modifiers, SensorDescriptor } from "@dnd-kit/core";

// Add editMode prop if not already present
interface ConditionalDragContextProps {
  enabled: boolean;
  children: React.ReactNode;
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  modifiers: Modifiers;
  sensors: SensorDescriptor<object>[];
}

// Conditional wrapper component
const ConditionalDragContext: React.FC<ConditionalDragContextProps> = ({
  enabled,
  children,
  handleDragStart,
  handleDragEnd,
  modifiers,
  sensors,
}) => {
  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={modifiers}
      sensors={sensors}
    >
      {children}
    </DndContext>
  );
};

export default ConditionalDragContext;
