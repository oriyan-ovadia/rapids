import React from 'react';
import { css } from '@linaria/core';
import { Button, Icon, Text } from '../../shared';

export function Home() {
    return (
        <div>
            <Text>Ignite</Text>
            <Button size="sm">Small</Button>
            <Button>Medium</Button>
            <Button size="lg">Large</Button>
            <Button isDisabled>Disabled button</Button>
            <Button appearance="ghost" intent="primary" startIcon="trash">
                Ghost button
            </Button>
            <Icon icon="trash" size="sm" />
            <Icon icon="trash" size="sm" />
            <Icon icon="trash" size="md" />
            <Icon icon="trash" size="lg" />
        </div>
    );
}
