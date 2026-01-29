import { useState, createRoot } from "@wordpress/element";
import "@wedevs/plugin-ui/styles.css";
import "./style.css";

import {
  Button,
  Alert,
  TextField,
  FieldLabel,
  Badge,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioCapsule,
  Switch,
  TextArea,
  NumberField,
  PasswordField,
  Select,
  InfoBox,
  Link,
  DebouncedInput,
  SearchInput,
  CustomizeRadio,
  List,
  AlertCircle,
  Check,
  Info,
  AlertTriangle,
  LucideIcon,
  Plus,
  RichText,
  Popover,
  Modal,
  Tooltip,
  AsyncSelect,
  ShowHideField,
  SocialButton,
  MediaUploader,
  Filter,
  ListItem,
  ChevronDownIcon,
  ChevronUpIcon,
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  GoogleIcon,
  InfoIcon,
  RefreshIcon,
  SquareMinus,
  SquarePlus,
  Search,
  X,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Shadcn,
} from "@wedevs/plugin-ui";

const OldPage = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchOn, setSwitchOn] = useState(false);
  const [customizeRadio, setCustomizeRadio] = useState("card1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [showHideValue, setShowHideValue] = useState("hidden content");
  const [richTextValue, setRichTextValue] = useState("");

  return (
    <div className="plugin-ui-test-app">
      <div className="p-8 space-y-12 max-w-5xl mx-auto bg-white min-h-screen shadow-lg">
        <header className="space-y-2 border-b pb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Plugin UI Component Gallery
          </h1>
          <p className="text-lg text-gray-600 font-light">
            A comprehensive showcase of available components with Tailwind CSS
            4.
          </p>
        </header>

        {/* Alerts & Badges */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-500" />
            Feedback & Status
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Alert variant="success" label="Tailwind 4 Ready">
              The implementation is working perfectly with Tailwind 4!
            </Alert>
            <Alert variant="info" label="Integration Guide">
              You can use these components in any WordPress plugin.
            </Alert>
            <Alert variant="warning" label="Version Notice">
              Make sure to check the documentation for prop updates.
            </Alert>
            <Alert variant="danger" label="System Error">
              Critical errors will be displayed using this variant.
            </Alert>
          </div>

          <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-xl">
            <Badge variant="success" label="Active" />
            <Badge variant="info" label="Pending" />
            <Badge variant="warning" label="On Hold" />
            <Badge variant="danger" label="Cancelled" />
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-indigo-600">
            <LucideIcon iconName="MousePointer2" className="w-6 h-6" />
            Actions (Buttons)
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Shadcn.Button  variant="outline" size="sm">ShadcnButton</Shadcn.Button>
            <Shadcn.Button  variant="default">ShadcnButton</Shadcn.Button>
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="tertiary">Tertiary Action</Button>
            <Button variant="success">Save Changes</Button>
            <Button variant="danger">Delete Item</Button>
            <Button disabled>Disabled Button</Button>
            <Button variant="info">
              <LucideIcon iconName="Download" size={16} className="mr-2" />
              Download
            </Button>
          </div>
        </section>

        {/* Form Controls */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Form Controls</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <FieldLabel
                  title="Text Field"
                  description="Basic text input example"
                />
                <TextField
                  value={text}
                  onChange={(v) => setText(v as string)}
                  placeholder="Enter some text..."
                  helperText="This is a standard text input."
                />
              </div>

              <div className="space-y-2">
                <FieldLabel title="Password Field" />
                <PasswordField placeholder="Enter secure password" />
              </div>

              <div className="space-y-2">
                <FieldLabel title="Number Field" />
                <NumberField defaultValue={10} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <FieldLabel title="Select Menu" />
                <Select
                  options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                    { label: "Option 3", value: "3" },
                  ]}
                />
              </div>

              <div className="space-y-2">
                <FieldLabel title="Text Area" />
                <TextArea placeholder="Write a long description..." rows={4} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-2xl">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Checkboxes</h3>
              <Checkbox
                label="Accept terms and conditions"
                checked={checked}
                onChange={setChecked}
              />
              <div className="mt-4">
                <FieldLabel title="Interests" labelClassName="mb-2" />
                <CheckboxGroup
                  options={[
                    { label: "Coding", value: "coding" },
                    { label: "Design", value: "design" },
                    { label: "Marketing", value: "marketing" },
                  ]}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Radios</h3>
              <Radio
                name="demo-radio"
                options={[
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" },
                ]}
                value={radioValue}
                onChange={(v) => setRadioValue(v as string)}
              />
              <div className="mt-4">
                <FieldLabel title="Frequency" labelClassName="mb-2" />
                <RadioCapsule
                  options={[
                    { label: "Daily", value: "daily" },
                    { label: "Weekly", value: "weekly" },
                    { label: "Monthly", value: "monthly" },
                  ]}
                  value="weekly"
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Toggles</h3>
              <Switch
                label="Enable Push Notifications"
                checked={switchOn}
                onChange={setSwitchOn}
              />
            </div>
          </div>
        </section>

        {/* Specialized Inputs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Specialized Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <FieldLabel title="Search Input" />
              <SearchInput onChange={(v) => console.log("Searching:", v)} />
            </div>
            <div className="space-y-2">
              <FieldLabel title="Debounced Input" />
              <DebouncedInput
                placeholder="Wait 300ms after typing..."
                onChange={(v) => console.log("Debounced:", v)}
              />
            </div>
          </div>
        </section>

        {/* Rich Text Editor */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Rich Text Editor</h2>
          <div className="space-y-4">
            <FieldLabel
              title="Rich Text Editor"
              description="WYSIWYG editor with formatting options, images, and videos"
            />
            <RichText
              value={richTextValue}
              onChange={(v) => setRichTextValue(v as string)}
              placeholder="Start typing your content here..."
            />
          </div>
        </section>

        {/* Layout & Lists */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Advanced Selection & Lists</h2>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">CustomizeRadio (Cards)</h3>
            <CustomizeRadio
              radioVariant="card"
              selectedValue={customizeRadio}
              onChange={(v) => setCustomizeRadio(v as string)}
              options={[
                {
                  title: "Starter Plan",
                  value: "card1",
                  description: "Perfect for small stores",
                  icon: <LucideIcon iconName="Store" size={24} />,
                },
                {
                  title: "Pro Plan",
                  value: "card2",
                  description: "Advanced features for growth",
                  icon: <LucideIcon iconName="Rocket" size={24} />,
                },
                {
                  title: "Enterprise",
                  value: "card3",
                  description: "Scale without limits",
                  icon: <LucideIcon iconName="Building" size={24} />,
                },
              ]}
            />
          </div>

          <div className="mt-8">
            <List
              title="Recent Activities"
              description="Keep track of what's happening."
              bordered
              items={[
                {
                  primary: "New Order #1234",
                  secondary: "Received 5 minutes ago",
                  leadingElement: (
                    <div className="p-2 bg-green-100 text-green-600 rounded-full">
                      <LucideIcon iconName="ShoppingCart" size={16} />
                    </div>
                  ),
                },
                {
                  primary: "Product Updated",
                  secondary: "Main landing page updated",
                  leadingElement: (
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                      <LucideIcon iconName="Edit" size={16} />
                    </div>
                  ),
                },
                {
                  primary: "Security Alert",
                  secondary: "New login from unknown device",
                  leadingElement: (
                    <div className="p-2 bg-red-100 text-red-600 rounded-full">
                      <LucideIcon iconName="ShieldAlert" size={16} />
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Info & Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Information & Support</h2>
          <InfoBox title="Quick Guide" variant="info">
            Visit our <Link href="#">documentation</Link> to learn more about
            how to use these components effectively in your project.
          </InfoBox>
        </section>

        {/* Modal & Popover */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Overlays & Dialogs</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            >
              Toggle Popover!
              {isPopoverOpen && <Popover>Popover is toggled!</Popover>}
            </Button>
            <Tooltip content="This is a tooltip message">
              <Button variant="tertiary">Hover for Tooltip</Button>
            </Tooltip>
          </div>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={() => setIsModalOpen(false)}
            title="Example Modal"
            confirmText="Confirm"
            cancelText="Cancel"
          >
            <div className="space-y-4">
              <p>
                This is a modal dialog component. You can add any content here.
              </p>
              <TextField
                value={text}
                onChange={(v) => setText(v as string)}
                placeholder="Enter text in modal..."
              />
            </div>
          </Modal>
        </section>

        {/* Async Selects */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Async Select Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <FieldLabel title="Generic Async Select" />
              <AsyncSelect
                value={null}
                onChange={() => {}}
                placeholder="Search..."
                loadOptions={async (inputValue) => {
                  // Simulate async loading
                  return [
                    { label: `Option 1 for "${inputValue}"`, value: "1" },
                    { label: `Option 2 for "${inputValue}"`, value: "2" },
                  ];
                }}
              />
            </div>
          </div>
        </section>

        {/* Additional Components */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Additional Components</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <FieldLabel title="Show/Hide Field" />
              <ShowHideField
                value={showHideValue}
                onChange={(v) => setShowHideValue(v as string)}
                placeholder="Enter hidden content..."
              />
            </div>
            <div className="space-y-2">
              <FieldLabel title="Social Button" />
              <SocialButton
                network="google"
                onClick={() => console.log("Google login")}
              />
            </div>
            <div className="space-y-2">
              <FieldLabel title="Media Uploader" />
              <MediaUploader
                onSelect={(media) => console.log("Selected media:", media)}
              >
                <Button variant="secondary">Select Media</Button>
              </MediaUploader>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Filter Component</h3>
            <Filter
              namespace="example"
              fields={[
                <Select
                  key="status"
                  options={[
                    { label: "Active", value: "active" },
                    { label: "Inactive", value: "inactive" },
                  ]}
                  placeholder="Select Status"
                />,
              ]}
              onFilter={() => console.log("Filter applied")}
              onReset={() => console.log("Filter reset")}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">List Item Component</h3>
            <div className="border rounded-lg p-4">
              <ListItem
                primary="Standalone List Item"
                secondary="This is a single list item component"
                leadingElement={
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-full">
                    <LucideIcon iconName="Star" size={16} />
                  </div>
                }
              />
            </div>
          </div>
        </section>

        {/* Icons Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Icons Collection</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 p-6 bg-gray-50 rounded-xl">
            <div className="flex flex-col items-center gap-2">
              <ChevronDownIcon size={24} />
              <span className="text-xs text-gray-600">ChevronDown</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ChevronUpIcon size={24} />
              <span className="text-xs text-gray-600">ChevronUp</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CopyIcon />
              <span className="text-xs text-gray-600">Copy</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <EyeIcon />
              <span className="text-xs text-gray-600">Eye</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <EyeOffIcon />
              <span className="text-xs text-gray-600">EyeOff</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GoogleIcon />
              <span className="text-xs text-gray-600">Google</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <InfoIcon />
              <span className="text-xs text-gray-600">Info</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RefreshIcon />
              <span className="text-xs text-gray-600">Refresh</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SquareMinus size={24} />
              <span className="text-xs text-gray-600">SquareMinus</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SquarePlus size={24} />
              <span className="text-xs text-gray-600">SquarePlus</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Search size={24} />
              <span className="text-xs text-gray-600">Search</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <X size={24} />
              <span className="text-xs text-gray-600">X</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Calendar size={24} />
              <span className="text-xs text-gray-600">Calendar</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ChevronLeft size={24} />
              <span className="text-xs text-gray-600">ChevronLeft</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ChevronRight size={24} />
              <span className="text-xs text-gray-600">ChevronRight</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader2 size={24} className="animate-spin" />
              <span className="text-xs text-gray-600">Loader2</span>
            </div>
          </div>
        </section>

        <footer className="pt-12 border-t text-center text-gray-500 text-sm">
          <div className="test-component">
            Tailwind 4 @theme and @apply variables test - This background should
            be red if override works!
          </div>
          <div className="hidden" />
          <p className="mt-4">
            Built with @wedevs/plugin-ui and Tailwind CSS 4
          </p>
        </footer>
      </div>
    </div>
  );
};

export default OldPage;