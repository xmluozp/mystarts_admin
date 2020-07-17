
import React from 'react';
// import scom from './scom'


interface Props {
    status?: String;
    dataLocal?: any;
    dataModel: any;
    onChange: Function
}

// const ComPaperCustom = scom(Paper)


export const ComForm: React.FC<Props> = ({dataLocal, dataModel, onChange,  ...props }: any) => {

    // injection
    return <>
        {recursiveMap(props.children, (item: React.ReactElement) => {

            const {fieldId} = item.props

            if(!fieldId) {
                return item
            }            

            const newProps:any = {};

            newProps.id = fieldId;
            newProps.value = dataLocal ? dataLocal[fieldId] : null;
            newProps.label = dataModel[fieldId].label;
            newProps.onChange = onChange;

            // inject id, value, label, onChange
            return React.cloneElement(item, {
                ...item.props,
                ...newProps
            });
        })}
    </>
}

function recursiveMap(children: any, fn: Function) {

    return React.Children.map(children, (child: React.ReactNode) => {

        if (!React.isValidElement(child)) {
            return child;
        }

        if (child.props.children) {
            child = React.cloneElement(child, {
                children: recursiveMap(child.props.children, fn),
            });
        }

        return fn(child);
    });
}