const interfaceConst = "interface";

module.exports = (componentName) => `import { useTranslation, FC } from 'react-i18next';
import { memo } from 'react';
import { S${componentName} } from '${componentName}.style.tsx'

${interfaceConst} ${componentName}Props {

}

export const ${componentName}: FC<${componentName}Props> = memo((props) => {
    const {} = props;
    const { t } = useTranslation();
    
    return (
        <S${componentName}>
            ${componentName}
        </S${componentName}>
    );
});`;
