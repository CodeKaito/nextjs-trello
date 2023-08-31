'use client'

import { XCircleIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { Draggable, DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "react-beautiful-dnd";
import Image from "next/image";
import { useBoardStore } from "@/store/BoardStore";
import getUrl from "@/lib/getUrl";

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
    };

function TodoCard({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps,
}: Props) {

    const { deleteTask } = useBoardStore();
    const [imageUrl, setImageUrl] = useState<string | null>(null);


  useEffect(() => {
    if (todo.image) {
      const fetchImage = async () => {
        const url = await getUrl(todo.image!);
            if (url) {
                setImageUrl(url.toString());
            }
        };
        fetchImage();
        }
    }, [todo]);

    return (
        <div className="bg-white rounded-md space-y-2 drop-shadow-md"
            {...draggableProps} {...dragHandleProps} ref={innerRef}>
                <div className="flex justify-between items-center p-5">
                    <p>{todo.title}</p>
                    <button onClick={() => deleteTask(index,todo,id)} 
                            className="text-red-500 hover:text-red-700">
                        <XCircleIcon className="ml-5 h-8 w-8" />
                    </button>
                </div>

        { /* Add image here */ }
        {imageUrl && (
            <div className="h-full w-full rounded-b-md">
                <Image 
                    src={imageUrl}
                    alt="Task image"
                    width={400}
                    height={200}
                    className="w-full object-contain rounded-b-md"
                    />
            </div>            
        )}
        </div>
    )
}

export default TodoCard
