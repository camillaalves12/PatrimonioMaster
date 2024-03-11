package model;

public class Item {
	
	private String descricao;
	private String numserie;
	private String patrimonio;
	private String secretaria;
	private String setor;
	
	public Item(String descricao,String numserie, String patrimonio, String secretaria, String setor) {
		this.descricao = descricao;
		this.numserie = numserie;
		this.patrimonio = patrimonio;
		this.secretaria = secretaria;
		this.setor = setor;
	}
	
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getNumserie() {
		return numserie;
	}
	public void setNumserie(String numserie) {
		this.numserie = numserie;
	}
	public String getPatrimonio() {
		return patrimonio;
	}
	public void setPatrimonio(String patrimonio) {
		this.patrimonio = patrimonio;
	}
	public String getSecretaria() {
		return secretaria;
	}
	public void setSecretaria(String secretaria) {
		this.secretaria = secretaria;
	}
	public String getSetor() {
		return setor;
	}
	public void setSetor(String setor) {
		this.setor = setor;
	}
}
