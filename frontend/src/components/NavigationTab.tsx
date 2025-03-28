import { Button } from "./Button"

interface NavigationTabProps {
    activeTab: string
    content: string[]
    handleTabClick: (tab: string) => void
}

export const NavigationTab = ({ activeTab, handleTabClick, content }: NavigationTabProps) => {
    return (
        <nav>
            <div className="flex gap-2 bg-gray-100 rounded-md p-1 justify-around mb-4">
                {content.map((tab, index) => (
                    <Button
                        key={index}
                        variant="active"
                        size="sm"
                        width="full"
                        onClick={() => handleTabClick(tab)}
                        className={activeTab === tab ? 'bg-white' : ''}
                    >
                        <span>{tab}</span>
                    </Button>
                ))}
            </div>
        </nav>
    )
}
