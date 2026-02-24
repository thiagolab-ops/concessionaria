'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, X, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'

export default function VeiculosTab() {
    const [vehicles, setVehicles] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingVehicle, setEditingVehicle] = useState<any | null>(null)

    // Form state
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        year: '',
        price: '',
        category: 'Sedan',
        description: '',
        hasAuction: false,
        images: '',
        status: 'AVAILABLE'
    })

    const loadVehicles = async () => {
        try {
            const resp = await fetch('/api/veiculos')
            if (resp.ok) {
                const data = await resp.json()
                setVehicles(data)
            }
        } catch (error) {
            toast.error('Erro ao carregar veículos')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadVehicles()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const url = editingVehicle
                ? `/api/veiculos/${editingVehicle.id}`
                : '/api/veiculos'

            const method = editingVehicle ? 'PUT' : 'POST'

            const resp = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (resp.ok) {
                toast.success(`Veículo ${editingVehicle ? 'atualizado' : 'cadastrado'} com sucesso`)
                loadVehicles()
                setIsModalOpen(false)
                resetForm()
            } else {
                toast.error('Erro ao salvar veículo')
            }
        } catch (error) {
            toast.error('Erro interno ao salvar')
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Tem certeza que deseja excluir este veículo?')) return

        try {
            const resp = await fetch(`/api/veiculos/${id}`, { method: 'DELETE' })
            if (resp.ok) {
                toast.success('Veículo excluído')
                loadVehicles()
            } else {
                toast.error('Erro ao excluir veículo')
            }
        } catch (error) {
            toast.error('Erro ao excluir')
        }
    }

    const openEditModal = (vehicle: any) => {
        setEditingVehicle(vehicle)
        setFormData({
            brand: vehicle.brand,
            model: vehicle.model,
            year: vehicle.year.toString(),
            price: vehicle.price.toString(),
            category: vehicle.category,
            description: vehicle.description,
            hasAuction: vehicle.hasAuction,
            images: vehicle.images.join(', '),
            status: vehicle.status
        })
        setIsModalOpen(true)
    }

    const resetForm = () => {
        setEditingVehicle(null)
        setFormData({
            brand: '',
            model: '',
            year: '',
            price: '',
            category: 'Sedan',
            description: '',
            hasAuction: false,
            images: '',
            status: 'AVAILABLE'
        })
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Veículos em Estoque</h2>
                    <p className="text-sm text-gray-500">Gerencie todos os veículos da concessionária.</p>
                </div>
                <button
                    onClick={() => {
                        resetForm()
                        setIsModalOpen(true)
                    }}
                    className="flex items-center gap-2 bg-primary text-black font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Novo Veículo
                </button>
            </div>

            {loading ? (
                <p className="text-gray-500">Carregando...</p>
            ) : vehicles.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <AlertCircle className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                    <h3 className="text-lg font-medium text-gray-900">Nenhum veículo cadastrado</h3>
                    <p className="text-gray-500">Comece adicionando seu primeiro veículo ao estoque.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vehicles.map((v) => (
                        <div key={v.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
                            <div className="h-40 bg-gray-200 relative">
                                {v.images.length > 0 ? (
                                    <img src={v.images[0]} alt={v.model} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">Sem Foto</div>
                                )}
                                <div className="absolute top-2 right-2 flex gap-2">
                                    <span className={`px-2 py-1 text-xs font-bold rounded shadow-sm ${v.status === 'AVAILABLE' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}`}>
                                        {v.status}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-xs text-gray-500 font-bold uppercase mb-1">{v.brand} • {v.year}</div>
                                <h3 className="font-bold text-lg text-gray-800 mb-1">{v.model}</h3>
                                <p className="text-primary font-black text-xl mb-4">R$ {parseFloat(v.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>

                                <div className="flex gap-2">
                                    <button onClick={() => openEditModal(v)} className="flex-1 flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium transition">
                                        <Edit2 className="w-4 h-4" /> Editar
                                    </button>
                                    <button onClick={() => handleDelete(v.id)} className="flex items-center justify-center w-10 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal CRUD */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center z-10">
                            <h3 className="text-lg font-bold text-gray-900">{editingVehicle ? 'Editar Veículo' : 'Novo Veículo'}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                                    <input required type="text" value={formData.brand} onChange={e => setFormData({ ...formData, brand: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black" placeholder="Ex: BMW" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
                                    <input required type="text" value={formData.model} onChange={e => setFormData({ ...formData, model: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black" placeholder="Ex: 320i M Sport" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Ano</label>
                                    <input required type="number" value={formData.year} onChange={e => setFormData({ ...formData, year: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black" placeholder="2024" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Preço</label>
                                    <input required type="number" step="0.01" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black" placeholder="Apenas números" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                                    <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black bg-white">
                                        <option value="Sedan">Sedan</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Hatch">Hatch</option>
                                        <option value="Esportivo">Esportivo</option>
                                        <option value="Picape">Picape</option>
                                        <option value="Elétrico">Elétrico</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                    <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black bg-white">
                                        <option value="AVAILABLE">Disponível</option>
                                        <option value="RESERVED">Reservado</option>
                                        <option value="SOLD">Vendido</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                                <textarea required value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black h-24" placeholder="Detalhes do veículo, specs extras, histórico..." />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">URLs das Imagens (separadas por vírgula)</label>
                                <textarea value={formData.images} onChange={e => setFormData({ ...formData, images: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black h-20" placeholder="https://imagem1.jpg, https://imagem2.jpg..." />
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="hasAuction" checked={formData.hasAuction} onChange={e => setFormData({ ...formData, hasAuction: e.target.checked })} className="w-4 h-4 text-primary rounded border-gray-300" />
                                <label htmlFor="hasAuction" className="text-sm text-gray-700 font-medium">Possui passagem por leilão?</label>
                            </div>

                            <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition">Cancelar</button>
                                <button type="submit" className="px-6 py-2 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition shadow-sm">
                                    {editingVehicle ? 'Salvar Alterações' : 'Cadastrar Veículo'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
