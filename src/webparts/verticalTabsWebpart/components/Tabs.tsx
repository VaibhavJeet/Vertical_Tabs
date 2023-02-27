import * as React from 'react';
import { useState } from "react";
import "./App.css";
import { IconContext } from "react-icons";
import { BiDockRight } from 'react-icons/bi'
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles  } from '@fluentui/react/lib/Stack';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };



  const stackTokens = { childrenGap: 50 };
  const iconProps = { iconName: 'Calendar' };
  const stackStyles: Partial<IStackStyles> = { root: { width: 350 } };
  const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 150 } },
  };

  const options: IChoiceGroupOption[] = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C', disabled: true },
    { key: 'D', text: 'Option D' },
  ];


  return (
    <form>
      <div className="container">
        <div className="bloc-tabs">
          <div>
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <IconContext.Provider value={{ className: 'tab-react-icons' }}>
                <BiDockRight />
              </IconContext.Provider>
              Tab 1
            </button>
          </div><div>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <IconContext.Provider value={{ className: 'tab-react-icons' }}>
                <BiDockRight />
              </IconContext.Provider>
              Tab 2
            </button>
          </div><div>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <IconContext.Provider value={{ className: 'tab-react-icons' }}>
                <BiDockRight />
              </IconContext.Provider>
              Tab 3
            </button>
          </div><div>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              <IconContext.Provider value={{ className: 'tab-react-icons' }}>
                <BiDockRight />
              </IconContext.Provider>
              Tab 4
            </button>
          </div><div>
            <button
              className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(5)}
            >
              <IconContext.Provider value={{ className: 'tab-react-icons' }}>
                <BiDockRight />
              </IconContext.Provider>
              Tab 5
            </button>
          </div><div>
            <button
              className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(6)}
            >
              <IconContext.Provider value={{ className: 'tab-react-icons' }}>
                <BiDockRight />
              </IconContext.Provider>
              Tab 6
            </button>
          </div>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Content 1</h2>
            <hr />
            <Stack horizontal tokens={stackTokens} styles={stackStyles}>
              <Stack {...columnProps}>
                <TextField label="Standard" />
                <TextField label="Disabled" disabled defaultValue="I am disabled" />
                <TextField label="Read-only" readOnly defaultValue="I am read-only" />
                <TextField label="Required " required />
                <TextField ariaLabel="Required without visible label" required />
                <TextField label="With error message" errorMessage="Error message" />
              </Stack>
              <Stack {...columnProps}>
                <MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" title="A 10 digit number" />
                <TextField label="With an icon" iconProps={iconProps} />
                <TextField label="With placeholder" placeholder="Please enter text here" />
                <TextField label="Disabled with placeholder" disabled placeholder="I am disabled" />
                <TextField
                  label="Password with reveal button"
                  type="password"
                  canRevealPassword
                />
              </Stack>
            </Stack>
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Content 2</h2>
            <hr />
            <ChoiceGroup defaultSelectedKey="B" options={options} onChange={_onChange} label="Pick one" required={true} />
          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
          <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
            <h2>Content 4</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus inignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
          <div
            className={toggleState === 5 ? "content  active-content" : "content"}
          >
            <h2>Content 5</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernat sunt.
            </p>
          </div>
          <div
            className={toggleState === 6 ? "content  active-content" : "content"}
          >
            <h2>Content 6</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unsunt.
            </p>
          </div>
        </div>
      </div>
      <Stack horizontal tokens={stackTokens}>
      <DefaultButton text="Standard"  allowDisabledFocus />
      <PrimaryButton text="Primary"  allowDisabledFocus  />
    </Stack>
    </form>
  );
}

export default Tabs;

function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
  console.dir(option);
}