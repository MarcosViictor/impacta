import { Button } from "./Button"

interface NavigationTabProps {
    activeTab: string
    content: string[]
    handleTabClick: (tab: string) => void
}

export const NavigationTab = ({ activeTab, handleTabClick, content }: NavigationTabProps) => {
    return (
        <nav>
            <div className="flex gap-2 bg-gray-100 rounded-md p-1 justify-around mb-6">
                        <Button
                            variant="active"
                            size="sm"
                            width="full"
                            onClick={() => handleTabClick(content[0])}
                            className={activeTab === content[0] ? 'bg-white' : ''}
                        >
                            <span>{content[0]}</span>
                        </Button>

                        <Button
                            variant="active"
                            size="sm"
                            width="full"
                            onClick={() => handleTabClick(content[1])}
                            className={activeTab === content[1] ? 'bg-white' : ''}
                        >
                            <span>{content[1]}</span>
                        </Button>
                        <Button
                            variant="active"
                            size="sm"
                            width="full"
                            onClick={() => handleTabClick(content[2])}
                            className={activeTab === content[2] ? 'bg-white' : ''}
                        >           
                            <span>{content[2]}</span>
                        </Button>
                        <Button
                            variant="active"
                            size="sm"
                            width="full"
                            onClick={() => handleTabClick(content[3])}
                            className={activeTab === content[3] ? 'bg-white' : ''}
                        >
                            <span>{content[3]}</span>
                        </Button>
                    </div>
        </nav>
    )
}
